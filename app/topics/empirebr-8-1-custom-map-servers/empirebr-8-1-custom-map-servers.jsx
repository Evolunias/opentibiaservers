import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-custom-map-servers');
}

export default function Empirebr81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-custom-map-servers" />;
}
