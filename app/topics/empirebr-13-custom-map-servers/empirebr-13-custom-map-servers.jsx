import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-custom-map-servers');
}

export default function Empirebr13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-custom-map-servers" />;
}
