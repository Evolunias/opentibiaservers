import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-brazil');
}

export default function LowExpSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-brazil" />;
}
