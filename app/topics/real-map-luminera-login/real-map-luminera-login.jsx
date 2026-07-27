import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-login');
}

export default function RealMapLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-login" />;
}
