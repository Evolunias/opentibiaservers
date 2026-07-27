import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-real-map-server');
}

export default function Unline12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-real-map-server" />;
}
