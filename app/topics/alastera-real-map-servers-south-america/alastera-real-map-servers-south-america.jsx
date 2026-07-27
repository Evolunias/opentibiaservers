import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-south-america');
}

export default function AlasteraRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-south-america" />;
}
