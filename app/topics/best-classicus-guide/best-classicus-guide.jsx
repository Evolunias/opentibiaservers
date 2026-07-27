import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-guide');
}

export default function BestClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-guide" />;
}
