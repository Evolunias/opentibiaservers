import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-south-america');
}

export default function AlasteraRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-south-america" />;
}
