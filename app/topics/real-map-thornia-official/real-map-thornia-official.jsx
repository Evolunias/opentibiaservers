import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-official');
}

export default function RealMapThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-official" />;
}
