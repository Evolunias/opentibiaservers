import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-custom-map-server');
}

export default function Coxaot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-custom-map-server" />;
}
