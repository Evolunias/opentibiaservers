import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-custom-map-servers');
}

export default function AureraGlobal80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-custom-map-servers" />;
}
