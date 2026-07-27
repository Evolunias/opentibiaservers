import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-custom-map-servers');
}

export default function Nilot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-custom-map-servers" />;
}
