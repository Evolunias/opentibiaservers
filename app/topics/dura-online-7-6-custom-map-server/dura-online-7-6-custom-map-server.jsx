import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-6-custom-map-server');
}

export default function DuraOnline76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-6-custom-map-server" />;
}
