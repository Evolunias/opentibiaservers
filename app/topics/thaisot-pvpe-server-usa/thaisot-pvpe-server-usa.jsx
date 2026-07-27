import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-usa');
}

export default function ThaisotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-usa" />;
}
