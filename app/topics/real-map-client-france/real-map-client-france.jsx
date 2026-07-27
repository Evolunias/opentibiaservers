import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-france');
}

export default function RealMapClientFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-france" />;
}
