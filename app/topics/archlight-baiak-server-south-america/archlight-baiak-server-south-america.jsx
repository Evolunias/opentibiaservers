import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-south-america');
}

export default function ArchlightBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-south-america" />;
}
