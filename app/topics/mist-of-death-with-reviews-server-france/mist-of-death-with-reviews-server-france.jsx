import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-france');
}

export default function MistOfDeathWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-france" />;
}
