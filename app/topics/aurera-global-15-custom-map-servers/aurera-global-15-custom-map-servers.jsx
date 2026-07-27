import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-custom-map-servers');
}

export default function AureraGlobal15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-custom-map-servers" />;
}
