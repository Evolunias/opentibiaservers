import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-real-map-server');
}

export default function Coxaot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-real-map-server" />;
}
