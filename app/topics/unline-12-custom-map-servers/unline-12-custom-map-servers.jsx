import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-custom-map-servers');
}

export default function Unline12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="unline-12-custom-map-servers" />;
}
