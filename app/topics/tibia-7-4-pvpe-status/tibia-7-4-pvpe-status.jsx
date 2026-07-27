import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-status');
}

export default function Tibia74PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-status" />;
}
