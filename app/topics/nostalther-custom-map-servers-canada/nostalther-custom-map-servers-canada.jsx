import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-canada');
}

export default function NostaltherCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-canada" />;
}
