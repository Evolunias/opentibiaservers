import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-real-map-server');
}

export default function Coxaot81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-real-map-server" />;
}
