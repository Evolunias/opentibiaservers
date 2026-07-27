import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-official');
}

export default function HighrateCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-official" />;
}
