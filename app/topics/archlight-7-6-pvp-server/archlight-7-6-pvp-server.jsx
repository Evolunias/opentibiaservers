import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-pvp-server');
}

export default function Archlight76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-pvp-server" />;
}
