import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-uk');
}

export default function MediviaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-uk" />;
}
