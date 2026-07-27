import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-custom-map-server');
}

export default function Realesta100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-custom-map-server" />;
}
