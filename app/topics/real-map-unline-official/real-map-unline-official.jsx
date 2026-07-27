import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-official');
}

export default function RealMapUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-official" />;
}
