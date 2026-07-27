import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-guide');
}

export default function TopCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-guide" />;
}
