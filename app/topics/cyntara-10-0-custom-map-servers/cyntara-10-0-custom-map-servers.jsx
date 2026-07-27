import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-custom-map-servers');
}

export default function Cyntara100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-custom-map-servers" />;
}
