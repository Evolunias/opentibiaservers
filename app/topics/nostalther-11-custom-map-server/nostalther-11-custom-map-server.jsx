import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-custom-map-server');
}

export default function Nostalther11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-custom-map-server" />;
}
