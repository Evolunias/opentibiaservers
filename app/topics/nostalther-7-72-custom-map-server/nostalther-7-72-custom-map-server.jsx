import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-72-custom-map-server');
}

export default function Nostalther772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-72-custom-map-server" />;
}
