import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-real-map-servers');
}

export default function Unline12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-12-real-map-servers" />;
}
