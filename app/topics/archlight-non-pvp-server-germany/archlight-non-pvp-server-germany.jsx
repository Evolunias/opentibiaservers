import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-germany');
}

export default function ArchlightNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-germany" />;
}
