import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-south-america');
}

export default function TibijkaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-south-america" />;
}
