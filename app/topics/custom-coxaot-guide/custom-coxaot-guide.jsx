import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-guide');
}

export default function CustomCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-guide" />;
}
