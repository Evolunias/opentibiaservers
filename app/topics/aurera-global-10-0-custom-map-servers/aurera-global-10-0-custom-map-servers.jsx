import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-custom-map-servers');
}

export default function AureraGlobal100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-custom-map-servers" />;
}
