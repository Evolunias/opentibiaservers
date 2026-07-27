import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-servers');
}

export default function RealMapMidhemServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-servers" />;
}
