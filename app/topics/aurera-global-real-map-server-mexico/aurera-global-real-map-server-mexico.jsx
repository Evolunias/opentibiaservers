import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-mexico');
}

export default function AureraGlobalRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-mexico" />;
}
