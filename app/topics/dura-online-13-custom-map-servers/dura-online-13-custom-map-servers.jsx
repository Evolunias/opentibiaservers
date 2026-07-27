import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-custom-map-servers');
}

export default function DuraOnline13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-custom-map-servers" />;
}
