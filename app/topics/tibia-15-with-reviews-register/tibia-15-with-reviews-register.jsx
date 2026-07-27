import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-register');
}

export default function Tibia15WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-register" />;
}
