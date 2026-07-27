import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-real-map-server');
}

export default function DuraOnline71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-real-map-server" />;
}
