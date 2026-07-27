import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-uk');
}

export default function MediviaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-uk" />;
}
