import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-guide');
}

export default function NewCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-guide" />;
}
