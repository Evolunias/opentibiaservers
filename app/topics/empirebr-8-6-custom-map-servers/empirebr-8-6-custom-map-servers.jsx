import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-custom-map-servers');
}

export default function Empirebr86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-custom-map-servers" />;
}
