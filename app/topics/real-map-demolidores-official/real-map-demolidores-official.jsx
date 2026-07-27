import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-official');
}

export default function RealMapDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-official" />;
}
