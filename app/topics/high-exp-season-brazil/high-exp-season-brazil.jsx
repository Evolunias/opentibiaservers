import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-brazil');
}

export default function HighExpSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-brazil" />;
}
