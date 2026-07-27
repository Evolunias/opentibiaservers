import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-private-server');
}

export default function OfficialArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-private-server" />;
}
