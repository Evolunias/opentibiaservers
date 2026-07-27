import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-germany');
}

export default function ArchlightPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-germany" />;
}
