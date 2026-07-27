import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-website');
}

export default function WithReviewsEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-website" />;
}
