import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-brazil');
}

export default function MediviaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-brazil" />;
}
