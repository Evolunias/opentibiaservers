import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-custom-map-server');
}

export default function AureraGlobal96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-custom-map-server" />;
}
