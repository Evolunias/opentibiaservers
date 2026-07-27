import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-guide');
}

export default function PopularCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-guide" />;
}
