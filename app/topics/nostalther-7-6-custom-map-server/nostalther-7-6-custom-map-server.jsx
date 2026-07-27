import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-custom-map-server');
}

export default function Nostalther76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-custom-map-server" />;
}
