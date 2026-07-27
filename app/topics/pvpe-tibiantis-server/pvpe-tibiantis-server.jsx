import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibiantis-server');
}

export default function PvpeTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibiantis-server" />;
}
