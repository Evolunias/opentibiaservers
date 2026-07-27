import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-reviews-register');
}

export default function Tibia81WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-reviews-register" />;
}
