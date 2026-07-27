import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-usa');
}

export default function CustomMapOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-usa" />;
}
