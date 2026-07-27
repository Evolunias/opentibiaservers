import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-custom-map-servers');
}

export default function Coxaot84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-custom-map-servers" />;
}
