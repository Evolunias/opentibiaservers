import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-europe');
}

export default function DuraOnlineCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-europe" />;
}
