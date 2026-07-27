import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-official');
}

export default function RealMapCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-official" />;
}
