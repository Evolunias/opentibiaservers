import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-canada');
}

export default function ThorniaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-canada" />;
}
