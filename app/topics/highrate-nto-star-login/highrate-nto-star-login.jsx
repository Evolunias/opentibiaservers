import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-login');
}

export default function HighrateNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-login" />;
}
