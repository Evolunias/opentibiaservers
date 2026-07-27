import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-custom-map-servers');
}

export default function Coxaot86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-custom-map-servers" />;
}
