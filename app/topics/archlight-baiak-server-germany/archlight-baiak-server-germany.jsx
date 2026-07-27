import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-germany');
}

export default function ArchlightBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-germany" />;
}
