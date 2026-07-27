import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-ot-server');
}

export default function RealMapMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-ot-server" />;
}
