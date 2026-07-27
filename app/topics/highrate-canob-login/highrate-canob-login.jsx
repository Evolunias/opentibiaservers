import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-login');
}

export default function HighrateCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-login" />;
}
