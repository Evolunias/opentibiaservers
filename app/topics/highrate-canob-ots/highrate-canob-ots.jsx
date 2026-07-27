import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-ots');
}

export default function HighrateCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-ots" />;
}
