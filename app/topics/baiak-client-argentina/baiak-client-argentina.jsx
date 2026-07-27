import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-argentina');
}

export default function BaiakClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-argentina" />;
}
