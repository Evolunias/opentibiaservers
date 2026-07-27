import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-reviews');
}

export default function OpenTibiaServersReviewsKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-reviews" />;
}
