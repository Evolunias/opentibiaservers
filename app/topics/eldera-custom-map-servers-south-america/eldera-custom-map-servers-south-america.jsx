import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-south-america');
}

export default function ElderaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-south-america" />;
}
