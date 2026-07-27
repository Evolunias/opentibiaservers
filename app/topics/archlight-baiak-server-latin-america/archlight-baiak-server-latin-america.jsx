import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-latin-america');
}

export default function ArchlightBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-latin-america" />;
}
