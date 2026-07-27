import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-north-america');
}

export default function PvpeOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-north-america" />;
}
