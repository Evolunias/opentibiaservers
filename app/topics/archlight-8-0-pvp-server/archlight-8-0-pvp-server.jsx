import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-pvp-server');
}

export default function Archlight80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-pvp-server" />;
}
