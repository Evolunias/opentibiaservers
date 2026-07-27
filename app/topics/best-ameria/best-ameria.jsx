import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria');
}

export default function BestAmeriaKeywordPage() {
  return <StaticKeywordPage slug="best-ameria" />;
}
