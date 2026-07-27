import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-54-custom-map-server');
}

export default function Realera854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-54-custom-map-server" />;
}
