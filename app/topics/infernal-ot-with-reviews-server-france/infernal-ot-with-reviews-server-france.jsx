import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-france');
}

export default function InfernalOtWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-france" />;
}
