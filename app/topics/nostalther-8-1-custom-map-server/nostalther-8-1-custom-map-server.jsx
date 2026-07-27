import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-custom-map-server');
}

export default function Nostalther81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-custom-map-server" />;
}
