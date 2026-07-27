import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-uk');
}

export default function MediviaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-uk" />;
}
