import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-latin-america');
}

export default function TibianusBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-latin-america" />;
}
