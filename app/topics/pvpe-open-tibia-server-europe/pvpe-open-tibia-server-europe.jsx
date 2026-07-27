import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-europe');
}

export default function PvpeOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-europe" />;
}
