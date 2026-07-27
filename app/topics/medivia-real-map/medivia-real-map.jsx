import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map');
}

export default function MediviaRealMapKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map" />;
}
