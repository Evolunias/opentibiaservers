import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-europe');
}

export default function NoxiousotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-europe" />;
}
