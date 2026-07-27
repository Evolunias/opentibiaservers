import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-france');
}

export default function RealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-france" />;
}
