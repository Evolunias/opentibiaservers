import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-non-pvp-server');
}

export default function Archlight86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-non-pvp-server" />;
}
