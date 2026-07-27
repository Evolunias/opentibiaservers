import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-status');
}

export default function Tibia80PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-status" />;
}
