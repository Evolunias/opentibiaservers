import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-poland');
}

export default function TibiaoriginsNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-poland" />;
}
