import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-custom-map-servers');
}

export default function AureraGlobal13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-custom-map-servers" />;
}
