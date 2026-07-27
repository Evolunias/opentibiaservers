import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-pvp-server');
}

export default function Archlight12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-pvp-server" />;
}
