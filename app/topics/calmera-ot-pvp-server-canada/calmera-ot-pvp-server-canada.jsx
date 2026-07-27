import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-canada');
}

export default function CalmeraOtPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-canada" />;
}
