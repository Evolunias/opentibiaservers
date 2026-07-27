import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-custom-map-server');
}

export default function Coxaot12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-custom-map-server" />;
}
