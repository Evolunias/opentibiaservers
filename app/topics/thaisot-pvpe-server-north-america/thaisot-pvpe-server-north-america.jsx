import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-north-america');
}

export default function ThaisotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-north-america" />;
}
