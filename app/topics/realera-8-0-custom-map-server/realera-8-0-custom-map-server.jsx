import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-custom-map-server');
}

export default function Realera80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-custom-map-server" />;
}
