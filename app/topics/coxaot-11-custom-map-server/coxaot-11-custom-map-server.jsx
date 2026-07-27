import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-custom-map-server');
}

export default function Coxaot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-custom-map-server" />;
}
