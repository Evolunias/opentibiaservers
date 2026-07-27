import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-argentina');
}

export default function ArchlightPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-argentina" />;
}
