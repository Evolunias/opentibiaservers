import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-usa');
}

export default function BaiakServersUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-usa" />;
}
