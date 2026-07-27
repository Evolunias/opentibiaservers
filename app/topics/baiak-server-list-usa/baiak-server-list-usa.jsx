import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-usa');
}

export default function BaiakServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-usa" />;
}
