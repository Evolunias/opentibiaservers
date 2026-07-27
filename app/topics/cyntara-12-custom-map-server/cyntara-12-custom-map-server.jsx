import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-custom-map-server');
}

export default function Cyntara12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-custom-map-server" />;
}
