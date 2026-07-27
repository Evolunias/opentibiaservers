import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-season');
}

export default function CalmeraOtSeasonKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-season" />;
}
