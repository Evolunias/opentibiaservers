import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-custom-map-servers');
}

export default function Oxygenot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-custom-map-servers" />;
}
