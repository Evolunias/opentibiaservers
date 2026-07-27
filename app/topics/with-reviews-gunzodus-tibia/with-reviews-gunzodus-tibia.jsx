import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-tibia');
}

export default function WithReviewsGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-tibia" />;
}
