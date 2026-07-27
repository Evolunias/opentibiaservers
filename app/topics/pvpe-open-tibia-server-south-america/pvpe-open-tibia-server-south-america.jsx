import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-south-america');
}

export default function PvpeOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-south-america" />;
}
