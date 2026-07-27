import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-non-pvp-server');
}

export default function Archlight100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-non-pvp-server" />;
}
