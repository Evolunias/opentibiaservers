import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-archlight-server');
}

export default function NonPvpArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-archlight-server" />;
}
