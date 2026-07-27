import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-canada');
}

export default function ArchlightBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-canada" />;
}
