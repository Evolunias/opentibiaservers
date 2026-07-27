import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-argentina');
}

export default function ArchlightNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-argentina" />;
}
