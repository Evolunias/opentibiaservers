import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-status');
}

export default function Tibia772PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-status" />;
}
