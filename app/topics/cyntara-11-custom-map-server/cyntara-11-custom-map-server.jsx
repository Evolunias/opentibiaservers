import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-custom-map-server');
}

export default function Cyntara11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-custom-map-server" />;
}
