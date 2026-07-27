import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-client');
}

export default function LowrateArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-client" />;
}
