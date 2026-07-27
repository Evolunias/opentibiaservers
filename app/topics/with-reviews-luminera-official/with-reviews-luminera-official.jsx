import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-official');
}

export default function WithReviewsLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-official" />;
}
