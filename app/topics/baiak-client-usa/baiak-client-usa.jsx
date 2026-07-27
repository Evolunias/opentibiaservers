import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-usa');
}

export default function BaiakClientUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-usa" />;
}
