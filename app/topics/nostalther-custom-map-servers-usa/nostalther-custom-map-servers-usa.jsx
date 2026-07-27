import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-usa');
}

export default function NostaltherCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-usa" />;
}
