import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-server');
}

export default function ArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-server" />;
}
