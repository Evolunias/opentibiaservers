import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-custom-map-servers');
}

export default function Empirebr11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-custom-map-servers" />;
}
