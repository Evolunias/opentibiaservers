import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-argentina');
}

export default function NostaltherCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-argentina" />;
}
