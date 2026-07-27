import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-custom-map-server');
}

export default function Cyntara14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-custom-map-server" />;
}
