import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-1-custom-map-server');
}

export default function AureraGlobal71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-1-custom-map-server" />;
}
