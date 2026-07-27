import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-client');
}

export default function CurrentArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-client" />;
}
