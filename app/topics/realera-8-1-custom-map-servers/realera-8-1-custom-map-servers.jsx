import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-custom-map-servers');
}

export default function Realera81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-custom-map-servers" />;
}
