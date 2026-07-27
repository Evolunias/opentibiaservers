import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-non-pvp-server');
}

export default function Archlight13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-non-pvp-server" />;
}
