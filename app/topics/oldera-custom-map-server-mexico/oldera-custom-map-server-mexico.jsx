import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-mexico');
}

export default function OlderaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-mexico" />;
}
