import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp');
}

export default function CalmeraOtPvpKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp" />;
}
