import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-uk');
}

export default function DuraOnlineCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-uk" />;
}
