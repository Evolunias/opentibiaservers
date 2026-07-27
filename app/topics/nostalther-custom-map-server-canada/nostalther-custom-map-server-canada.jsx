import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-canada');
}

export default function NostaltherCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-canada" />;
}
