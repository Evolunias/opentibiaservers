import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-germany');
}

export default function NoxiousotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-germany" />;
}
