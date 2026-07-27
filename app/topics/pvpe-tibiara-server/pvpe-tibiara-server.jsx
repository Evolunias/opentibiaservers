import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibiara-server');
}

export default function PvpeTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibiara-server" />;
}
