import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-mexico');
}

export default function PvpeOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-mexico" />;
}
