import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-register');
}

export default function Tibia13WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-register" />;
}
