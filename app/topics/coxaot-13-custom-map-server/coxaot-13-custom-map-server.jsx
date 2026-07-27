import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-custom-map-server');
}

export default function Coxaot13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-custom-map-server" />;
}
