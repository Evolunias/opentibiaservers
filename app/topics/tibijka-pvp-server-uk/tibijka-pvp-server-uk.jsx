import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-uk');
}

export default function TibijkaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-uk" />;
}
