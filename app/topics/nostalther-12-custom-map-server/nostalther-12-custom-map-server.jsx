import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-custom-map-server');
}

export default function Nostalther12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-custom-map-server" />;
}
