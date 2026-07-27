import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-official');
}

export default function WithReviewsMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-official" />;
}
