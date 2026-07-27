import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-usa');
}

export default function AureraGlobalCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-usa" />;
}
