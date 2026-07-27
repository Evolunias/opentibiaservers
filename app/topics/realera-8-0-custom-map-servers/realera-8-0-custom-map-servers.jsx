import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-custom-map-servers');
}

export default function Realera80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-custom-map-servers" />;
}
