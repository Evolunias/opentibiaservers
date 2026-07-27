import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-official');
}

export default function WithReviewsTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-official" />;
}
