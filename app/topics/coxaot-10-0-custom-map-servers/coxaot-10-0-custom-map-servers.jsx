import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-custom-map-servers');
}

export default function Coxaot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-custom-map-servers" />;
}
