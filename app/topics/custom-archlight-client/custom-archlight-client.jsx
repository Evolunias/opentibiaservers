import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-client');
}

export default function CustomArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-client" />;
}
