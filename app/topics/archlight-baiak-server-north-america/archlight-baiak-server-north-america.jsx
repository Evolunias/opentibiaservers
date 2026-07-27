import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-north-america');
}

export default function ArchlightBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-north-america" />;
}
