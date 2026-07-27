import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-custom-map-servers');
}

export default function Realera100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-custom-map-servers" />;
}
