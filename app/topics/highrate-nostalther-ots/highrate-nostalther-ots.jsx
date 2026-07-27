import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-ots');
}

export default function HighrateNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-ots" />;
}
