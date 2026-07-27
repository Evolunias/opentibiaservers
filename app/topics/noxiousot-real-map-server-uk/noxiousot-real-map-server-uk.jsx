import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-uk');
}

export default function NoxiousotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-uk" />;
}
