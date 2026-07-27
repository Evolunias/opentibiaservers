import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-brazil');
}

export default function OlderaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-brazil" />;
}
