import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-custom-map-server');
}

export default function Coxaot81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-custom-map-server" />;
}
