import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-ot-server');
}

export default function HighrateArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-ot-server" />;
}
