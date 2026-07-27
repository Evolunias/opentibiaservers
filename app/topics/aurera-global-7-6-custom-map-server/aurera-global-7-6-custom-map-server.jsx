import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-6-custom-map-server');
}

export default function AureraGlobal76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-6-custom-map-server" />;
}
