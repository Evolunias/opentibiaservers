import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-client');
}

export default function RealMapMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-client" />;
}
