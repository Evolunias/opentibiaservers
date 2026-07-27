import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-europe');
}

export default function TibiaraPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-europe" />;
}
