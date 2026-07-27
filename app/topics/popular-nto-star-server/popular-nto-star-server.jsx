import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-server');
}

export default function PopularNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-server" />;
}
