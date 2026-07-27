import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-custom-map-servers');
}

export default function Oxygenot96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-custom-map-servers" />;
}
