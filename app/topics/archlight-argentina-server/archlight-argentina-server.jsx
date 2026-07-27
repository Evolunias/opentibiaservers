import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-argentina-server');
}

export default function ArchlightArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-argentina-server" />;
}
