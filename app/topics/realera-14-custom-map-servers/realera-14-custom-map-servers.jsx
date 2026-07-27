import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-custom-map-servers');
}

export default function Realera14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-14-custom-map-servers" />;
}
