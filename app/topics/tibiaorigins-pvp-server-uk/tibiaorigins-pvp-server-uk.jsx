import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-uk');
}

export default function TibiaoriginsPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-uk" />;
}
