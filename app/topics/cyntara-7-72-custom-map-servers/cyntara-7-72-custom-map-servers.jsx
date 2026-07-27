import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-custom-map-servers');
}

export default function Cyntara772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-custom-map-servers" />;
}
