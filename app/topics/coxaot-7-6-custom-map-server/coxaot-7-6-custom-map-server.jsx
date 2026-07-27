import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-custom-map-server');
}

export default function Coxaot76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-custom-map-server" />;
}
