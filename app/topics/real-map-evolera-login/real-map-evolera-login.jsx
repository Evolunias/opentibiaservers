import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-login');
}

export default function RealMapEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-login" />;
}
