import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-tibia');
}

export default function WithReviewsDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-tibia" />;
}
