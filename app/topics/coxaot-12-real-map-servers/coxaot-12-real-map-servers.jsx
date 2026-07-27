import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-real-map-servers');
}

export default function Coxaot12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-real-map-servers" />;
}
