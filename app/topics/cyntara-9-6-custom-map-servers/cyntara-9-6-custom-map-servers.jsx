import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-custom-map-servers');
}

export default function Cyntara96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-custom-map-servers" />;
}
