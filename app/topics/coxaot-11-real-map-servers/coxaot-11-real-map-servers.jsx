import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-real-map-servers');
}

export default function Coxaot11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-real-map-servers" />;
}
