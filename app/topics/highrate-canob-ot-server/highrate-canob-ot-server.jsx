import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-ot-server');
}

export default function HighrateCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-ot-server" />;
}
