import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-reviews');
}

export default function OldSchoolTibiaServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-reviews" />;
}
