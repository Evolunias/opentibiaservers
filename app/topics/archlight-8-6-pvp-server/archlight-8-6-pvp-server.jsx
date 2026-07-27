import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-pvp-server');
}

export default function Archlight86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-pvp-server" />;
}
