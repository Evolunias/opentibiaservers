import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-ots');
}

export default function HighrateElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-ots" />;
}
