import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-official');
}

export default function RealMapAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-official" />;
}
