import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-real-map-server');
}

export default function Coxaot11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-real-map-server" />;
}
