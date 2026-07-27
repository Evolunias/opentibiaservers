import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-custom-map-server');
}

export default function Nostalther100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-custom-map-server" />;
}
