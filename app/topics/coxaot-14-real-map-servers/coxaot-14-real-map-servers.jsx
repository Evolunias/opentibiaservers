import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-real-map-servers');
}

export default function Coxaot14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-real-map-servers" />;
}
