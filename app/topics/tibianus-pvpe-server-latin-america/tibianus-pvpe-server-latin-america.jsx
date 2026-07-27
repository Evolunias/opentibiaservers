import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-latin-america');
}

export default function TibianusPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-latin-america" />;
}
