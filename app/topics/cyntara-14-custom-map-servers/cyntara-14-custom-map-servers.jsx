import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-custom-map-servers');
}

export default function Cyntara14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-custom-map-servers" />;
}
