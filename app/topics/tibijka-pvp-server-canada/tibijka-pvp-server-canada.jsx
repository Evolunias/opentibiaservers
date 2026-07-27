import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-canada');
}

export default function TibijkaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-canada" />;
}
