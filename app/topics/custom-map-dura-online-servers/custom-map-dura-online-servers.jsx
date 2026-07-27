import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-dura-online-servers');
}

export default function CustomMapDuraOnlineServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-dura-online-servers" />;
}
