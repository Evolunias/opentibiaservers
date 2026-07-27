import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibiame-server');
}

export default function PvpeTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibiame-server" />;
}
