import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-custom-map-server');
}

export default function Nostalther14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-custom-map-server" />;
}
