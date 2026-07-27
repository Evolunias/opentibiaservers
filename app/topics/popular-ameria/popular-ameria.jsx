import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria');
}

export default function PopularAmeriaKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria" />;
}
