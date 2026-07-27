import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-client');
}

export default function HighrateOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-client" />;
}
