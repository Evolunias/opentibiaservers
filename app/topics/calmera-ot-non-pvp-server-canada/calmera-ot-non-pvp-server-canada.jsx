import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-canada');
}

export default function CalmeraOtNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-canada" />;
}
