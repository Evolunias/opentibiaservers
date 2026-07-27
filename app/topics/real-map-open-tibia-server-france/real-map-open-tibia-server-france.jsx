import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-france');
}

export default function RealMapOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-france" />;
}
