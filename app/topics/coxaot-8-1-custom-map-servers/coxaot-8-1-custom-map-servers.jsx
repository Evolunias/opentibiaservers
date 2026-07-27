import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-custom-map-servers');
}

export default function Coxaot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-custom-map-servers" />;
}
