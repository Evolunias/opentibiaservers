import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-custom-map-servers');
}

export default function Empirebr96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-custom-map-servers" />;
}
