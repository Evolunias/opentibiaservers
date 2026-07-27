import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-custom-map-servers');
}

export default function AureraGlobal12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-custom-map-servers" />;
}
