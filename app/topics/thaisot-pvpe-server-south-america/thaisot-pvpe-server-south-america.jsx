import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-south-america');
}

export default function ThaisotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-south-america" />;
}
