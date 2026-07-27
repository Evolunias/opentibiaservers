import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-custom-map-server');
}

export default function AureraGlobal12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-custom-map-server" />;
}
