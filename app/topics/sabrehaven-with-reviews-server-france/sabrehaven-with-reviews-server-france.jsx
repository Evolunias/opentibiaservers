import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-france');
}

export default function SabrehavenWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-france" />;
}
