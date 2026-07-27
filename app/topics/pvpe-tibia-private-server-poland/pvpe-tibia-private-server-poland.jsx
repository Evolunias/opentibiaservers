import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-poland');
}

export default function PvpeTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-poland" />;
}
