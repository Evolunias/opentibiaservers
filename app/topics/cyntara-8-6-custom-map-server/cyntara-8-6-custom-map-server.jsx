import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-custom-map-server');
}

export default function Cyntara86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-custom-map-server" />;
}
