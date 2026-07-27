import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-custom-map-server');
}

export default function Unline12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-custom-map-server" />;
}
