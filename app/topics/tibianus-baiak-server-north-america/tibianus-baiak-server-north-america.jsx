import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-north-america');
}

export default function TibianusBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-north-america" />;
}
