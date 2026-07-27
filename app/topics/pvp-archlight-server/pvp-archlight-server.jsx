import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-archlight-server');
}

export default function PvpArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-archlight-server" />;
}
