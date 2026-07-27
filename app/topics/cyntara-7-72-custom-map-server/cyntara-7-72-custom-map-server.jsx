import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-custom-map-server');
}

export default function Cyntara772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-custom-map-server" />;
}
