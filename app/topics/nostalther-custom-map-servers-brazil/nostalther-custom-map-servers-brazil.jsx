import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-brazil');
}

export default function NostaltherCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-brazil" />;
}
