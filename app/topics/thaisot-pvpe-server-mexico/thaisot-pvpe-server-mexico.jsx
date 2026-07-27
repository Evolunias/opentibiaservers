import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-mexico');
}

export default function ThaisotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-mexico" />;
}
