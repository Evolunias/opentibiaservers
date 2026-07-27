import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-brazil');
}

export default function MediviaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-brazil" />;
}
