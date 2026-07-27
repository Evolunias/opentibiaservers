import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-mexico');
}

export default function ArchlightBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-mexico" />;
}
