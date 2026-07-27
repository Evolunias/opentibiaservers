import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-france');
}

export default function RealMapServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-france" />;
}
