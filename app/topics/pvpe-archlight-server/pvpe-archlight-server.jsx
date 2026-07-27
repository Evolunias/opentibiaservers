import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-archlight-server');
}

export default function PvpeArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-archlight-server" />;
}
