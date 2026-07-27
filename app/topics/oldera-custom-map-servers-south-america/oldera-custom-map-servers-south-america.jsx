import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-south-america');
}

export default function OlderaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-south-america" />;
}
