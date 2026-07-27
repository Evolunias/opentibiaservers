import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-non-pvp-server');
}

export default function Archlight1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-non-pvp-server" />;
}
