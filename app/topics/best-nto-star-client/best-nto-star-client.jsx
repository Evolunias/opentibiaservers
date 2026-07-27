import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-client');
}

export default function BestNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-client" />;
}
