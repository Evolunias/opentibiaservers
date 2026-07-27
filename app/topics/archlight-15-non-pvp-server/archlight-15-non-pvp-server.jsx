import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-non-pvp-server');
}

export default function Archlight15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-non-pvp-server" />;
}
