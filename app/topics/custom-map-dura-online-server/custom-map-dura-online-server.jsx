import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-dura-online-server');
}

export default function CustomMapDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-dura-online-server" />;
}
