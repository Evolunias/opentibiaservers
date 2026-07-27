import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-server');
}

export default function LowrateArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-server" />;
}
