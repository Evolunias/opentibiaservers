import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-brazil');
}

export default function BaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-brazil" />;
}
