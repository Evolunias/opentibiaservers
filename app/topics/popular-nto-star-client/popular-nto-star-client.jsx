import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-client');
}

export default function PopularNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-client" />;
}
