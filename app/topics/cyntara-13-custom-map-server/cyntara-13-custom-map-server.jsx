import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-custom-map-server');
}

export default function Cyntara13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-custom-map-server" />;
}
