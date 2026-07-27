import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-custom-map-server');
}

export default function AureraGlobal14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-custom-map-server" />;
}
