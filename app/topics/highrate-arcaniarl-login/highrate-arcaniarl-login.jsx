import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-login');
}

export default function HighrateArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-login" />;
}
