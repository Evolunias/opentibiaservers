import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-custom-map-servers');
}

export default function Tibijka11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-custom-map-servers" />;
}
