import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-europe');
}

export default function MediviaRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-europe" />;
}
