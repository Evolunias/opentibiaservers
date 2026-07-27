import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-france');
}

export default function DuraOnlineWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-france" />;
}
