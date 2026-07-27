import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-guide');
}

export default function ActiveCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-guide" />;
}
