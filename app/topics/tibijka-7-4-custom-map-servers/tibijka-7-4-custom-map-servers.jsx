import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-custom-map-servers');
}

export default function Tibijka74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-custom-map-servers" />;
}
