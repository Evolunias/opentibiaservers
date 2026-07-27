import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-europe');
}

export default function OlderaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-europe" />;
}
