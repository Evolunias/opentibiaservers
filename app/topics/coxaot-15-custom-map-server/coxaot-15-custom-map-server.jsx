import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-custom-map-server');
}

export default function Coxaot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-custom-map-server" />;
}
