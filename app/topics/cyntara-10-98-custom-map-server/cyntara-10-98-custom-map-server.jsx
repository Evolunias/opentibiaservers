import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-custom-map-server');
}

export default function Cyntara1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-custom-map-server" />;
}
