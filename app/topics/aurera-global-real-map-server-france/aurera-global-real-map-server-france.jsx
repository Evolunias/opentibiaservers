import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-france');
}

export default function AureraGlobalRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-france" />;
}
