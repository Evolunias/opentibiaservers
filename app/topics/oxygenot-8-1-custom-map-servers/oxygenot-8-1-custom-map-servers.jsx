import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-custom-map-servers');
}

export default function Oxygenot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-custom-map-servers" />;
}
