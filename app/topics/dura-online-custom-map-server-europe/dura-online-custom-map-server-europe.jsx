import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-europe');
}

export default function DuraOnlineCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-europe" />;
}
