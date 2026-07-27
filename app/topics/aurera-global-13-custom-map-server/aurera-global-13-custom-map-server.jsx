import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-custom-map-server');
}

export default function AureraGlobal13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-custom-map-server" />;
}
