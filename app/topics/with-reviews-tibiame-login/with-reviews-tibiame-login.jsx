import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-login');
}

export default function WithReviewsTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-login" />;
}
