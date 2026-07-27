import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-private-server');
}

export default function LowrateArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-private-server" />;
}
