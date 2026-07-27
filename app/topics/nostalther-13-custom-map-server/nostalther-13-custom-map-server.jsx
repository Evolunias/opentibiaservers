import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-custom-map-server');
}

export default function Nostalther13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-custom-map-server" />;
}
