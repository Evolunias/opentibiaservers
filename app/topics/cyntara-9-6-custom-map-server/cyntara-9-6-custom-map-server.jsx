import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-custom-map-server');
}

export default function Cyntara96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-custom-map-server" />;
}
