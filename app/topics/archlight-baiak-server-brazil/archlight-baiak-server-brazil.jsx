import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-brazil');
}

export default function ArchlightBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-brazil" />;
}
