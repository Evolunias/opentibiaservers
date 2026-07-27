import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-usa');
}

export default function DuraOnlineCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-usa" />;
}
