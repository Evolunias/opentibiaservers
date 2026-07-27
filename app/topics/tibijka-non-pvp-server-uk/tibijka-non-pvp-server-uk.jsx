import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-uk');
}

export default function TibijkaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-uk" />;
}
