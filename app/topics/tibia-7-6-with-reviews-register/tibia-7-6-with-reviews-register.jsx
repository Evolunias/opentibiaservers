import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-reviews-register');
}

export default function Tibia76WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-reviews-register" />;
}
