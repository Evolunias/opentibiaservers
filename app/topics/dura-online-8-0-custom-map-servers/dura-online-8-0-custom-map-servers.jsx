import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-custom-map-servers');
}

export default function DuraOnline80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-custom-map-servers" />;
}
