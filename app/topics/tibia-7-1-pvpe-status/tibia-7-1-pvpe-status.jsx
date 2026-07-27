import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-status');
}

export default function Tibia71PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-status" />;
}
