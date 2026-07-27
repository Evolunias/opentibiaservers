import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-real-map-server');
}

export default function DuraOnline100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-real-map-server" />;
}
