import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-europe');
}

export default function PvpeTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-europe" />;
}
