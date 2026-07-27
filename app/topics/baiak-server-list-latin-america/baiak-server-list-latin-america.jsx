import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-latin-america');
}

export default function BaiakServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-latin-america" />;
}
