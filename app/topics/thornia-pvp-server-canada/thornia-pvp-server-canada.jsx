import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-canada');
}

export default function ThorniaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-canada" />;
}
