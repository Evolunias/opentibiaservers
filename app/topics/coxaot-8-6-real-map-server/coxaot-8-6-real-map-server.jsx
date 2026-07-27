import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-real-map-server');
}

export default function Coxaot86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-real-map-server" />;
}
