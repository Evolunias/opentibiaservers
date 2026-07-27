import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-canada');
}

export default function TibijkaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-canada" />;
}
