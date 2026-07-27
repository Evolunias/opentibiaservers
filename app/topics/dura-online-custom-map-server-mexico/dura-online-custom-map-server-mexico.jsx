import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-mexico');
}

export default function DuraOnlineCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-mexico" />;
}
