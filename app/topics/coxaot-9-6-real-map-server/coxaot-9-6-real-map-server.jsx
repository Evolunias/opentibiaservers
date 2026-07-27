import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-real-map-server');
}

export default function Coxaot96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-real-map-server" />;
}
