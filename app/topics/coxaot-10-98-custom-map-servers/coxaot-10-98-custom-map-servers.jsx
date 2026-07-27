import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-custom-map-servers');
}

export default function Coxaot1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-custom-map-servers" />;
}
