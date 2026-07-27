import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-custom-map-server');
}

export default function Midhem100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-custom-map-server" />;
}
