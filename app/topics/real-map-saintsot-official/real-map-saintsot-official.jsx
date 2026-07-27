import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-official');
}

export default function RealMapSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-official" />;
}
