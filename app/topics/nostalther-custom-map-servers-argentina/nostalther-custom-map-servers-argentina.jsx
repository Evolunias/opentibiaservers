import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-argentina');
}

export default function NostaltherCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-argentina" />;
}
