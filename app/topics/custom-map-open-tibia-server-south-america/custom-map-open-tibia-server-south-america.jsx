import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-south-america');
}

export default function CustomMapOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-south-america" />;
}
