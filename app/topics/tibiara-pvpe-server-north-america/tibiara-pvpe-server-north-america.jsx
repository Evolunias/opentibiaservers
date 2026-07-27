import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-north-america');
}

export default function TibiaraPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-north-america" />;
}
