import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-server');
}

export default function HighrateOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-server" />;
}
