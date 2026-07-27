import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-custom-map-server');
}

export default function Kasteria76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-custom-map-server" />;
}
