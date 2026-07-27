import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-custom-map-server');
}

export default function Venoreot12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-custom-map-server" />;
}
