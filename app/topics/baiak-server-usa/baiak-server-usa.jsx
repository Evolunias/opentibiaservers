import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-usa');
}

export default function BaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-usa" />;
}
