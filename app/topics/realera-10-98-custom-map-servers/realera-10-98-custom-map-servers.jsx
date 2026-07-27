import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-custom-map-servers');
}

export default function Realera1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-custom-map-servers" />;
}
