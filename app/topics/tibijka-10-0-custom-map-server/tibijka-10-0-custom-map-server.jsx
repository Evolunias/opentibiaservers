import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-custom-map-server');
}

export default function Tibijka100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-custom-map-server" />;
}
