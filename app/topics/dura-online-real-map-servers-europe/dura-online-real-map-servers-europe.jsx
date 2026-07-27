import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-europe');
}

export default function DuraOnlineRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-europe" />;
}
