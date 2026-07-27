import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-client');
}

export default function WithReviewsTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-client" />;
}
