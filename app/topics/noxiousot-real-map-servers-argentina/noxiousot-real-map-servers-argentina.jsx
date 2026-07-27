import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-argentina');
}

export default function NoxiousotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-argentina" />;
}
