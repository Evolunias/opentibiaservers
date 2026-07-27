import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-custom-map-servers');
}

export default function Empirebr15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-custom-map-servers" />;
}
