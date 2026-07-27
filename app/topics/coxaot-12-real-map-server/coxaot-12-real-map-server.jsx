import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-real-map-server');
}

export default function Coxaot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-real-map-server" />;
}
