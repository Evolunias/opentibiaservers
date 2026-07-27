import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-brazil');
}

export default function HighExpGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-brazil" />;
}
