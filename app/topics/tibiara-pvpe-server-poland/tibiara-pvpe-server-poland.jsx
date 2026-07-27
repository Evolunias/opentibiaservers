import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-poland');
}

export default function TibiaraPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-poland" />;
}
