import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-germany');
}

export default function PvpeOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-germany" />;
}
