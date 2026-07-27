import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-non-pvp-server');
}

export default function Archlight96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-non-pvp-server" />;
}
