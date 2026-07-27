import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-custom-map-server');
}

export default function Coxaot1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-custom-map-server" />;
}
