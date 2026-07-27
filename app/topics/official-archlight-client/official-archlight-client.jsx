import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-client');
}

export default function OfficialArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-client" />;
}
