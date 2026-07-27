import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-north-america');
}

export default function CustomMapOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-north-america" />;
}
