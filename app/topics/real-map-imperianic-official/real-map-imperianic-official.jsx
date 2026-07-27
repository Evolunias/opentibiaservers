import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-official');
}

export default function RealMapImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-official" />;
}
