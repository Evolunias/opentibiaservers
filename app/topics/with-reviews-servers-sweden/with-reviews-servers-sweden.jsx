import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-sweden');
}

export default function WithReviewsServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-sweden" />;
}
