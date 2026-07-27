import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-custom-map-servers');
}

export default function Oxygenot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-custom-map-servers" />;
}
