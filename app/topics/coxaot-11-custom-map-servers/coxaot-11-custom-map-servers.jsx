import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-custom-map-servers');
}

export default function Coxaot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-custom-map-servers" />;
}
