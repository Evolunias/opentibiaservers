import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-official');
}

export default function WithReviewsCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-official" />;
}
