import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-usa');
}

export default function TibianusBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-usa" />;
}
