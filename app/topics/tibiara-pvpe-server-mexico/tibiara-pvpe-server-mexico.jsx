import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-mexico');
}

export default function TibiaraPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-mexico" />;
}
