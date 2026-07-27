import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibiascape-server');
}

export default function PvpeTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibiascape-server" />;
}
