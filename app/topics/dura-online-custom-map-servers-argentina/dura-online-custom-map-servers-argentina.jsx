import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-argentina');
}

export default function DuraOnlineCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-argentina" />;
}
