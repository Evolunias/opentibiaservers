import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-germany-server');
}

export default function ArchlightGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-germany-server" />;
}
