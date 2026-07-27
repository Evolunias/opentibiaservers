import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-pvp-server');
}

export default function Archlight11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-pvp-server" />;
}
