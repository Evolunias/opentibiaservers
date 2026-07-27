import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera');
}

export default function HighrateOlderaKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera" />;
}
