import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-uk');
}

export default function NoxiousotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-uk" />;
}
