import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-europe');
}

export default function NoxiousotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-europe" />;
}
