import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-custom-map-server');
}

export default function AureraGlobal11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-custom-map-server" />;
}
