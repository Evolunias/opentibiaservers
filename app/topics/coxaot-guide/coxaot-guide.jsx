import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-guide');
}

export default function CoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="coxaot-guide" />;
}
