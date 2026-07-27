import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-south-america');
}

export default function ElderaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-south-america" />;
}
