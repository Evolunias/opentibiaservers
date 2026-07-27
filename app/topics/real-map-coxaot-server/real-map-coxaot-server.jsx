import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-server');
}

export default function RealMapCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-server" />;
}
