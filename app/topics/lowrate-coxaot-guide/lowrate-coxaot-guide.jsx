import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-guide');
}

export default function LowrateCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-guide" />;
}
