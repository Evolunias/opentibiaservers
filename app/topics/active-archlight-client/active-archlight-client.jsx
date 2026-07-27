import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-client');
}

export default function ActiveArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-client" />;
}
