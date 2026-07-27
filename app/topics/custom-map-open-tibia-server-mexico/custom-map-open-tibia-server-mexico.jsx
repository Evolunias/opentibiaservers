import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-mexico');
}

export default function CustomMapOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-mexico" />;
}
