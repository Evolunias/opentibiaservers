import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-custom-map-servers');
}

export default function Oxygenot71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-custom-map-servers" />;
}
