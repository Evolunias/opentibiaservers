import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-canada');
}

export default function AureraGlobalCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-canada" />;
}
