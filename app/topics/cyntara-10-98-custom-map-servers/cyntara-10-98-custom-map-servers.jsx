import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-custom-map-servers');
}

export default function Cyntara1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-custom-map-servers" />;
}
