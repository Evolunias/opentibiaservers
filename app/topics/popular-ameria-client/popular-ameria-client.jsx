import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-client');
}

export default function PopularAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-client" />;
}
