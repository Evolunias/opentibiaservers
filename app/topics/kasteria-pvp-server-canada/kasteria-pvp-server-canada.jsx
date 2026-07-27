import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-canada');
}

export default function KasteriaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-canada" />;
}
