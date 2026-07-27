import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-uk');
}

export default function OlderaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-uk" />;
}
