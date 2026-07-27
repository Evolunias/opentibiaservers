import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-real-map-servers');
}

export default function Coxaot13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-real-map-servers" />;
}
