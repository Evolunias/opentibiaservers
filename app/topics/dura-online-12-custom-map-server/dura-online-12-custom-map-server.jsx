import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-custom-map-server');
}

export default function DuraOnline12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-custom-map-server" />;
}
