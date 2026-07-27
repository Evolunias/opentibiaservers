import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-review');
}

export default function TibiaoriginsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-review" />;
}
