import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-custom-map-server');
}

export default function Realera74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-custom-map-server" />;
}
