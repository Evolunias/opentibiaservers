import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-custom-map-server');
}

export default function Nostalther86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-custom-map-server" />;
}
