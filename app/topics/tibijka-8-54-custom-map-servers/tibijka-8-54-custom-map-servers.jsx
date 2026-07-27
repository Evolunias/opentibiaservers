import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-54-custom-map-servers');
}

export default function Tibijka854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-54-custom-map-servers" />;
}
