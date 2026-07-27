import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-guide');
}

export default function BestLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-guide" />;
}
