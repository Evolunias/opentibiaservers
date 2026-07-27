import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-custom-map-servers');
}

export default function DuraOnline100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-custom-map-servers" />;
}
