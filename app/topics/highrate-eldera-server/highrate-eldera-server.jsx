import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-server');
}

export default function HighrateElderaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-server" />;
}
