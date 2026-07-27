import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-germany');
}

export default function NoxiousotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-germany" />;
}
