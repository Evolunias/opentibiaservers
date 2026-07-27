import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-poland');
}

export default function RealMapClientPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-poland" />;
}
