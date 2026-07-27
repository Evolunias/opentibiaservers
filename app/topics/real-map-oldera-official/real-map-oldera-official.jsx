import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-official');
}

export default function RealMapOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-official" />;
}
