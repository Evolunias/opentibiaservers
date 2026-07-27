import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-custom-map-servers');
}

export default function DuraOnline12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-custom-map-servers" />;
}
