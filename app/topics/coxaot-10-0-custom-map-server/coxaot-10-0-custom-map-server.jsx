import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-custom-map-server');
}

export default function Coxaot100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-custom-map-server" />;
}
