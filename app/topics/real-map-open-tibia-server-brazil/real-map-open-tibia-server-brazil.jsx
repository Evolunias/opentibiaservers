import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-brazil');
}

export default function RealMapOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-brazil" />;
}
