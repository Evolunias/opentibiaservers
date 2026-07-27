import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-official');
}

export default function RealMapMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-official" />;
}
