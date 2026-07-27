import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-ot-server');
}

export default function HighrateOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-ot-server" />;
}
