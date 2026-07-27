import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-custom-map-servers');
}

export default function Cyntara13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-custom-map-servers" />;
}
