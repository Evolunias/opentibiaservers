import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-mexico');
}

export default function BaiakServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-mexico" />;
}
