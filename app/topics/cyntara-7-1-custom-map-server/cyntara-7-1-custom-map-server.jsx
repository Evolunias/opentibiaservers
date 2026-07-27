import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-custom-map-server');
}

export default function Cyntara71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-custom-map-server" />;
}
