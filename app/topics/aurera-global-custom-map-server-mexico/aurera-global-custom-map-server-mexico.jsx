import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-mexico');
}

export default function AureraGlobalCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-mexico" />;
}
