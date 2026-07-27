import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-real-map-server');
}

export default function DuraOnline14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-real-map-server" />;
}
