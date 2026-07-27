import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-server');
}

export default function PopularAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-server" />;
}
