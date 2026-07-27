import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-mexico');
}

export default function TibianusBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-mexico" />;
}
