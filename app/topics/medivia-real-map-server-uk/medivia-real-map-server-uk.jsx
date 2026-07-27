import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-uk');
}

export default function MediviaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-uk" />;
}
