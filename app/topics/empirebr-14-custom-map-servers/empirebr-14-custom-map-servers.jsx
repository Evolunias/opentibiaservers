import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-custom-map-servers');
}

export default function Empirebr14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-custom-map-servers" />;
}
