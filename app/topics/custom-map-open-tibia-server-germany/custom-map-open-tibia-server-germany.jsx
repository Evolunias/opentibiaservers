import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-germany');
}

export default function CustomMapOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-germany" />;
}
