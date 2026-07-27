import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-latin-america');
}

export default function TibiaraPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-latin-america" />;
}
