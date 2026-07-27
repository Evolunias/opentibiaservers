import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-custom-map-servers');
}

export default function Nilot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-custom-map-servers" />;
}
