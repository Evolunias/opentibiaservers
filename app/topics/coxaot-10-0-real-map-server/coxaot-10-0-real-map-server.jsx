import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-real-map-server');
}

export default function Coxaot100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-real-map-server" />;
}
