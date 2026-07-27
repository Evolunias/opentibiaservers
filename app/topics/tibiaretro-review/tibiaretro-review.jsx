import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-review');
}

export default function TibiaretroReviewKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-review" />;
}
