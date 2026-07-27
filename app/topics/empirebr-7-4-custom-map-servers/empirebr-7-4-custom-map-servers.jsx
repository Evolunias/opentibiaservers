import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-custom-map-servers');
}

export default function Empirebr74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-custom-map-servers" />;
}
