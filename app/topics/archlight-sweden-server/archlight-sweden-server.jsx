import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-sweden-server');
}

export default function ArchlightSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-sweden-server" />;
}
