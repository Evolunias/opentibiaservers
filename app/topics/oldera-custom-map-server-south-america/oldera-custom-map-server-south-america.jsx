import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-south-america');
}

export default function OlderaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-south-america" />;
}
