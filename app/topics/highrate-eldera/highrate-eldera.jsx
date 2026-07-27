import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera');
}

export default function HighrateElderaKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera" />;
}
