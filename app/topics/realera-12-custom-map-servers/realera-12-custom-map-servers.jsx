import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-custom-map-servers');
}

export default function Realera12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-12-custom-map-servers" />;
}
