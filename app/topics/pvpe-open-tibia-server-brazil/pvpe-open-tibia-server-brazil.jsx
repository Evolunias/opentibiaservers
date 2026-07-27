import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-brazil');
}

export default function PvpeOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-brazil" />;
}
