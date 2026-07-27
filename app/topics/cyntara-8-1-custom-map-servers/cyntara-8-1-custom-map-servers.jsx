import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-custom-map-servers');
}

export default function Cyntara81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-custom-map-servers" />;
}
