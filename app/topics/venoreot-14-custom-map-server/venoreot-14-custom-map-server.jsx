import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-custom-map-server');
}

export default function Venoreot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-custom-map-server" />;
}
