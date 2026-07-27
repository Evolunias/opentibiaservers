import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-custom-map-servers');
}

export default function Coxaot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-custom-map-servers" />;
}
