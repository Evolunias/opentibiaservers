import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-mexico');
}

export default function OlderaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-mexico" />;
}
