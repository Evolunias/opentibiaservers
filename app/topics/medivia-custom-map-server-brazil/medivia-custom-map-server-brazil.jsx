import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-brazil');
}

export default function MediviaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-brazil" />;
}
