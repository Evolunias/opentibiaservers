import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-sweden');
}

export default function TibiaoriginsWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-sweden" />;
}
