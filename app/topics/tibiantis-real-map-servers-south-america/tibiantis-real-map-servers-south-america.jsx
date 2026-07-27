import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-south-america');
}

export default function TibiantisRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-south-america" />;
}
