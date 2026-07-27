import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-custom-map-servers');
}

export default function Oxygenot74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-custom-map-servers" />;
}
