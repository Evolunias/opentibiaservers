import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-brazil');
}

export default function NoxiousotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-brazil" />;
}
