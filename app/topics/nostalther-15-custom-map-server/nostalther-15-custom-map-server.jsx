import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-custom-map-server');
}

export default function Nostalther15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-custom-map-server" />;
}
