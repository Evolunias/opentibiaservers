import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-brazil');
}

export default function PvpeTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-brazil" />;
}
