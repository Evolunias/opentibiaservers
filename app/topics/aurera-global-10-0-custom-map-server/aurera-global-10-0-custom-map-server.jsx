import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-custom-map-server');
}

export default function AureraGlobal100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-custom-map-server" />;
}
