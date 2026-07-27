import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-brazil');
}

export default function TibianusBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-brazil" />;
}
