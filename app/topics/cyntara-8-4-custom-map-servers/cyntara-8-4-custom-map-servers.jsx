import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-custom-map-servers');
}

export default function Cyntara84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-custom-map-servers" />;
}
