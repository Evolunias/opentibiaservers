import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-brazil');
}

export default function CalmeraOtNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-brazil" />;
}
