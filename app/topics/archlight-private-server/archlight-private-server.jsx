import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-private-server');
}

export default function ArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-private-server" />;
}
