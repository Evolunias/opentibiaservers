import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-europe');
}

export default function MediviaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-europe" />;
}
