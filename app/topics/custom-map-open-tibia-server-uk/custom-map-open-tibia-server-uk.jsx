import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-uk');
}

export default function CustomMapOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-uk" />;
}
