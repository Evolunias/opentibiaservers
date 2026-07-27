import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-brazil');
}

export default function CalmeraOtPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-brazil" />;
}
