import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-98-custom-map-server');
}

export default function Nostalther1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-98-custom-map-server" />;
}
