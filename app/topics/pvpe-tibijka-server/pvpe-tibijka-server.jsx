import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibijka-server');
}

export default function PvpeTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibijka-server" />;
}
