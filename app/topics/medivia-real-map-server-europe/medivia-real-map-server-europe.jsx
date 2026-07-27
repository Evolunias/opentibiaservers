import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-europe');
}

export default function MediviaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-europe" />;
}
