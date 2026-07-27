import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-98-custom-map-server');
}

export default function AureraGlobal1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-98-custom-map-server" />;
}
