import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-custom-map-server');
}

export default function Midhem13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-custom-map-server" />;
}
