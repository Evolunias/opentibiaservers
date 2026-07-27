import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-custom-map-server');
}

export default function Realesta14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-custom-map-server" />;
}
