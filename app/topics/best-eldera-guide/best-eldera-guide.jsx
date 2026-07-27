import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-guide');
}

export default function BestElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-guide" />;
}
