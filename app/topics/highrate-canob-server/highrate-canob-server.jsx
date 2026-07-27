import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-server');
}

export default function HighrateCanobServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-server" />;
}
