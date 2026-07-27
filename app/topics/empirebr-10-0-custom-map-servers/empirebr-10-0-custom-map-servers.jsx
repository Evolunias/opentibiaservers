import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-custom-map-servers');
}

export default function Empirebr100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-custom-map-servers" />;
}
