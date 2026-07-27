import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-uk');
}

export default function OlderaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-uk" />;
}
