import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-guide');
}

export default function CurrentCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-guide" />;
}
