import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-sweden');
}

export default function NostaltherCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-sweden" />;
}
