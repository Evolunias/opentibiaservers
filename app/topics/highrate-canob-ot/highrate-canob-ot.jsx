import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-ot');
}

export default function HighrateCanobOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-ot" />;
}
