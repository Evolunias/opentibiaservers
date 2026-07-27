import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-brazil');
}

export default function NostaltherCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-brazil" />;
}
