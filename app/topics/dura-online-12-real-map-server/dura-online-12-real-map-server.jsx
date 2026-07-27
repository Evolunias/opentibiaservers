import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-real-map-server');
}

export default function DuraOnline12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-real-map-server" />;
}
