import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-custom-map-servers');
}

export default function Oxygenot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-custom-map-servers" />;
}
