import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-ot-server');
}

export default function LowrateArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-ot-server" />;
}
