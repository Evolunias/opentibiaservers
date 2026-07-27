import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-non-pvp-server');
}

export default function Archlight74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-non-pvp-server" />;
}
