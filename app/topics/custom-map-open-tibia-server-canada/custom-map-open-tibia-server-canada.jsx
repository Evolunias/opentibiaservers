import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-canada');
}

export default function CustomMapOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-canada" />;
}
