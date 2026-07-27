import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-real-map-server');
}

export default function Coxaot13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-real-map-server" />;
}
