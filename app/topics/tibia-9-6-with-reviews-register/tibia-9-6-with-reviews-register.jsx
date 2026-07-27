import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-reviews-register');
}

export default function Tibia96WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-reviews-register" />;
}
