import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-south-america');
}

export default function CustomMapOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-south-america" />;
}
