import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-custom-map-server');
}

export default function Nostalther80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-custom-map-server" />;
}
