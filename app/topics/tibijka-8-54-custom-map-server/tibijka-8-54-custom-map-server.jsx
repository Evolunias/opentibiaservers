import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-54-custom-map-server');
}

export default function Tibijka854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-54-custom-map-server" />;
}
