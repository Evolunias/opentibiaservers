import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-usa');
}

export default function AureraGlobalCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-usa" />;
}
