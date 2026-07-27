import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-poland');
}

export default function CustomMapOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-poland" />;
}
