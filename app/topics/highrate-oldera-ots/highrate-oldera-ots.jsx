import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-ots');
}

export default function HighrateOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-ots" />;
}
