import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-custom-map-servers');
}

export default function Oxygenot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-custom-map-servers" />;
}
