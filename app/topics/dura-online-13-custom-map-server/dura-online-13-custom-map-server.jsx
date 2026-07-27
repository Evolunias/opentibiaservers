import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-custom-map-server');
}

export default function DuraOnline13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-custom-map-server" />;
}
