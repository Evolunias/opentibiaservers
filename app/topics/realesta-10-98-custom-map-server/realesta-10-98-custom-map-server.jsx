import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-custom-map-server');
}

export default function Realesta1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-custom-map-server" />;
}
