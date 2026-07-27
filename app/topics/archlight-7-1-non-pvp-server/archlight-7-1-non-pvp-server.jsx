import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-non-pvp-server');
}

export default function Archlight71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-non-pvp-server" />;
}
