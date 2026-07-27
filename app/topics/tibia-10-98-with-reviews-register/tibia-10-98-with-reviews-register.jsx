import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-reviews-register');
}

export default function Tibia1098WithReviewsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-reviews-register" />;
}
