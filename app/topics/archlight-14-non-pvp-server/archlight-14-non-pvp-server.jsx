import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-non-pvp-server');
}

export default function Archlight14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-non-pvp-server" />;
}
