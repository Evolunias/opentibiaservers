import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-europe');
}

export default function MediviaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-europe" />;
}
