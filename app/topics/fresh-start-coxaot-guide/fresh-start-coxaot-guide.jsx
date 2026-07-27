import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-guide');
}

export default function FreshStartCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-guide" />;
}
