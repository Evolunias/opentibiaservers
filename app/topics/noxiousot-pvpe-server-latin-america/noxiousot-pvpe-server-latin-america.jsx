import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-latin-america');
}

export default function NoxiousotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-latin-america" />;
}
