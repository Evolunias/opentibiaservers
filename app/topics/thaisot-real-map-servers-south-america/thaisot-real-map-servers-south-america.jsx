import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-south-america');
}

export default function ThaisotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-south-america" />;
}
