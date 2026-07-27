import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-north-america');
}

export default function NoxiousotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-north-america" />;
}
