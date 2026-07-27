import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-usa');
}

export default function NoxiousotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-usa" />;
}
