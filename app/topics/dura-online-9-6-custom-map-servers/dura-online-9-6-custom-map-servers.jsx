import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-custom-map-servers');
}

export default function DuraOnline96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-custom-map-servers" />;
}
