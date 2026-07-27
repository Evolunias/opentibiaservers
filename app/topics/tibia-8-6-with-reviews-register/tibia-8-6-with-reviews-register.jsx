import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-reviews-register');
}

export default function Tibia86WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-reviews-register" />;
}
