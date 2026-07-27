import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-uk');
}

export default function TibiaoriginsNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-uk" />;
}
