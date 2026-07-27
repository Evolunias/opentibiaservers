import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-login');
}

export default function PopularNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-login" />;
}
