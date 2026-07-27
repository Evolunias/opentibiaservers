import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-latin-america');
}

export default function TibiantisPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-latin-america" />;
}
