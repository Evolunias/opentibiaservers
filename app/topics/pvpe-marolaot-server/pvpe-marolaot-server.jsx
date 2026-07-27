import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-marolaot-server');
}

export default function PvpeMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-marolaot-server" />;
}
