import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-status');
}

export default function Tibia81PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-status" />;
}
