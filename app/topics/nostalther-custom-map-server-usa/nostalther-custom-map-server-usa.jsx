import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-usa');
}

export default function NostaltherCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-usa" />;
}
