import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-france');
}

export default function TibiaraPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-france" />;
}
