import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-poland');
}

export default function TibiaoriginsPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-poland" />;
}
