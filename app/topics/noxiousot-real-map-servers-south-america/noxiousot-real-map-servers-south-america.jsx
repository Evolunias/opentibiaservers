import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-south-america');
}

export default function NoxiousotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-south-america" />;
}
