import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-custom-map-servers');
}

export default function Coxaot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-custom-map-servers" />;
}
