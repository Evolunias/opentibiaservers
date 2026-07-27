import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-europe');
}

export default function NoxiousotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-europe" />;
}
