import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-mexico');
}

export default function AureraGlobalCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-mexico" />;
}
