import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-custom-map-server');
}

export default function Coxaot84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-custom-map-server" />;
}
