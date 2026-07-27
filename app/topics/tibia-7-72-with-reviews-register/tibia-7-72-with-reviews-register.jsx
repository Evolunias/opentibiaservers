import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-register');
}

export default function Tibia772WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-register" />;
}
