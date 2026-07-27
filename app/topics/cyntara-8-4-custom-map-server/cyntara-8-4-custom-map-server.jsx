import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-custom-map-server');
}

export default function Cyntara84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-custom-map-server" />;
}
