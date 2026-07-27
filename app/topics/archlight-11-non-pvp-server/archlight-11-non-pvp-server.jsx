import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-non-pvp-server');
}

export default function Archlight11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-non-pvp-server" />;
}
