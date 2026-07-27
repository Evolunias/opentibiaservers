import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-argentina');
}

export default function DuraOnlineCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-argentina" />;
}
