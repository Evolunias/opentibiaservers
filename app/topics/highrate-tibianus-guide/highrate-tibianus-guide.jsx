import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-guide');
}

export default function HighrateTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-guide" />;
}
