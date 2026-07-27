import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-custom-map-server');
}

export default function Realera84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-custom-map-server" />;
}
