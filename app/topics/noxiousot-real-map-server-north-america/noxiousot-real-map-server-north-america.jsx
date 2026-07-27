import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-north-america');
}

export default function NoxiousotRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-north-america" />;
}
