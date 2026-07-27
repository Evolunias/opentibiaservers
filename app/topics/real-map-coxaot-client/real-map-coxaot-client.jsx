import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-client');
}

export default function RealMapCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-client" />;
}
