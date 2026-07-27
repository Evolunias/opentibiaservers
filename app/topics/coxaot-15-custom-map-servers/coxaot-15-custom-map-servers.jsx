import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-custom-map-servers');
}

export default function Coxaot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-custom-map-servers" />;
}
