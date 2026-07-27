import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-54-pvp-server');
}

export default function Archlight854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-54-pvp-server" />;
}
