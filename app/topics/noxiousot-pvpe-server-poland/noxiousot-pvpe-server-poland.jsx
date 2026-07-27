import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-poland');
}

export default function NoxiousotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-poland" />;
}
