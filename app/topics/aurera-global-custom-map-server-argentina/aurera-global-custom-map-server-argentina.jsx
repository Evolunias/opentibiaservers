import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-argentina');
}

export default function AureraGlobalCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-argentina" />;
}
