import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-custom-map-servers');
}

export default function DuraOnline15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-custom-map-servers" />;
}
