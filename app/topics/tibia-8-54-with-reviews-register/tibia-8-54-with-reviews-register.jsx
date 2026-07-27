import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-register');
}

export default function Tibia854WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-register" />;
}
