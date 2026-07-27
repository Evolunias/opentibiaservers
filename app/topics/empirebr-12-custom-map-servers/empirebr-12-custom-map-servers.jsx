import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-custom-map-servers');
}

export default function Empirebr12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-custom-map-servers" />;
}
