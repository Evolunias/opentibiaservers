import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-custom-map-server');
}

export default function AureraGlobal86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-custom-map-server" />;
}
