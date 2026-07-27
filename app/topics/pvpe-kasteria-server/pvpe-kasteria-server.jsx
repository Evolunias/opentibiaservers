import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-kasteria-server');
}

export default function PvpeKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-kasteria-server" />;
}
