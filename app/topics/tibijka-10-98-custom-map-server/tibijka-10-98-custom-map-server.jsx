import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-98-custom-map-server');
}

export default function Tibijka1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-98-custom-map-server" />;
}
