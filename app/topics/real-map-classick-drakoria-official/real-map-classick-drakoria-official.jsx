import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-official');
}

export default function RealMapClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-official" />;
}
