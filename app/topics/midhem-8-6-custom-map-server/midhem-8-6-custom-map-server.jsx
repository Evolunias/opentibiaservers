import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-custom-map-server');
}

export default function Midhem86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-custom-map-server" />;
}
