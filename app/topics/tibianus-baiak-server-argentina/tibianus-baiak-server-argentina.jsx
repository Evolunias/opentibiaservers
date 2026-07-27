import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-argentina');
}

export default function TibianusBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-argentina" />;
}
