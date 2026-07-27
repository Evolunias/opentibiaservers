import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-france');
}

export default function PvpeOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-france" />;
}
