import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-custom-map-server');
}

export default function Midhem11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-custom-map-server" />;
}
