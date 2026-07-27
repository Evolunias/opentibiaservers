import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-brazil');
}

export default function BaiakClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-brazil" />;
}
