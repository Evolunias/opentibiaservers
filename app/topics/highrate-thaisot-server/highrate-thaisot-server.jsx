import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-server');
}

export default function HighrateThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-server" />;
}
