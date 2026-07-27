import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-south-america');
}

export default function TibijkaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-south-america" />;
}
