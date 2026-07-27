import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-custom-map-servers');
}

export default function AureraGlobal96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-custom-map-servers" />;
}
