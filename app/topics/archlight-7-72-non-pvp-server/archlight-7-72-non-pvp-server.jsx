import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-non-pvp-server');
}

export default function Archlight772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-non-pvp-server" />;
}
