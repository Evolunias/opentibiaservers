import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-usa');
}

export default function DuraOnlineCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-usa" />;
}
