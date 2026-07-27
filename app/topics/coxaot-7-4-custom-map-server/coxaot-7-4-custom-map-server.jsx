import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-custom-map-server');
}

export default function Coxaot74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-custom-map-server" />;
}
