import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-official');
}

export default function RealMapAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-official" />;
}
