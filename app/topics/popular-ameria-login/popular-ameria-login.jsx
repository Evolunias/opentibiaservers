import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-login');
}

export default function PopularAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-login" />;
}
