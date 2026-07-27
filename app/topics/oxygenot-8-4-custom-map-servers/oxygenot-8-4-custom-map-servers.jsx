import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-custom-map-servers');
}

export default function Oxygenot84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-custom-map-servers" />;
}
