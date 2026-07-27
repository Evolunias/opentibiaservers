import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-server');
}

export default function RealMapMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-server" />;
}
