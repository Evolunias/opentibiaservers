import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-non-pvp-server');
}

export default function Archlight12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-non-pvp-server" />;
}
