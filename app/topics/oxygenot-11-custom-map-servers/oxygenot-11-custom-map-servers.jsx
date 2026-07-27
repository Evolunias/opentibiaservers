import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-custom-map-servers');
}

export default function Oxygenot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-custom-map-servers" />;
}
