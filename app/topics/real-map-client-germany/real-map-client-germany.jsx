import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-germany');
}

export default function RealMapClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-germany" />;
}
