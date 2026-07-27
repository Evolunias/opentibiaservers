import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-non-pvp-server');
}

export default function Archlight81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-non-pvp-server" />;
}
