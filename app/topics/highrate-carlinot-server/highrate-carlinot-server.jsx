import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-server');
}

export default function HighrateCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-server" />;
}
