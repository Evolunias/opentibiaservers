import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-brazil');
}

export default function AureraGlobalCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-brazil" />;
}
