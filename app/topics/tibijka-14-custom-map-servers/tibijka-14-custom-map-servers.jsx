import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-custom-map-servers');
}

export default function Tibijka14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-custom-map-servers" />;
}
