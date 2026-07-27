import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-client');
}

export default function TopNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-client" />;
}
