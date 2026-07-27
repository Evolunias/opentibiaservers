import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-south-america');
}

export default function NostaltherCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-south-america" />;
}
