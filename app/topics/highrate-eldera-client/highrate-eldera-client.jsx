import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-client');
}

export default function HighrateElderaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-client" />;
}
