import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-brazil');
}

export default function OlderaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-brazil" />;
}
