import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-official');
}

export default function RealMapEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-official" />;
}
