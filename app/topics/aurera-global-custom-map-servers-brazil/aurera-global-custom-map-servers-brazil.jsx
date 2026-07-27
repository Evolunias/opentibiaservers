import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-brazil');
}

export default function AureraGlobalCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-brazil" />;
}
