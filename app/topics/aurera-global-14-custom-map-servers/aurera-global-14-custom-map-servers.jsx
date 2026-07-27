import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-custom-map-servers');
}

export default function AureraGlobal14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-custom-map-servers" />;
}
