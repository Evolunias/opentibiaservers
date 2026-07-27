import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-germany');
}

export default function NoxiousotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-germany" />;
}
