import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-poland');
}

export default function RealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-poland" />;
}
