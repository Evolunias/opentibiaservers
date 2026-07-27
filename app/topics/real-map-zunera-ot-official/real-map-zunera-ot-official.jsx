import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-official');
}

export default function RealMapZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-official" />;
}
