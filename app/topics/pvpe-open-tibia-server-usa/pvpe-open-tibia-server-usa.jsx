import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-usa');
}

export default function PvpeOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-usa" />;
}
