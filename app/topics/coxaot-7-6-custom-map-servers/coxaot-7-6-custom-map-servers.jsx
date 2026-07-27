import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-custom-map-servers');
}

export default function Coxaot76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-custom-map-servers" />;
}
