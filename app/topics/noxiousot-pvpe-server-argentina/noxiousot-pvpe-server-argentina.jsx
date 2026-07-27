import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-argentina');
}

export default function NoxiousotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-argentina" />;
}
