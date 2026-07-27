import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-uk');
}

export default function TibiaraPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-uk" />;
}
