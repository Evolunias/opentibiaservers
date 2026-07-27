import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-register');
}

export default function Tibia12WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-register" />;
}
