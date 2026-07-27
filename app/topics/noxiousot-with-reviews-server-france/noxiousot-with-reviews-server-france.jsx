import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-france');
}

export default function NoxiousotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-france" />;
}
