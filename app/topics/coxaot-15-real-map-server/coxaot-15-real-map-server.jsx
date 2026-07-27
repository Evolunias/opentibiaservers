import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-real-map-server');
}

export default function Coxaot15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-real-map-server" />;
}
