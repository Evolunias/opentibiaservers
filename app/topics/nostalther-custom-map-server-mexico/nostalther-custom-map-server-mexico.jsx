import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-mexico');
}

export default function NostaltherCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-mexico" />;
}
