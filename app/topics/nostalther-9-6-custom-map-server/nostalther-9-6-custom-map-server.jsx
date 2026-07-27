import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-custom-map-server');
}

export default function Nostalther96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-custom-map-server" />;
}
