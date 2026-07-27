import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-south-america');
}

export default function MediviaRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-south-america" />;
}
