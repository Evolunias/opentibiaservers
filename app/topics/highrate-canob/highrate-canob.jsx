import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob');
}

export default function HighrateCanobKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob" />;
}
