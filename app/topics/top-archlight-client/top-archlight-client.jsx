import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-client');
}

export default function TopArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-client" />;
}
