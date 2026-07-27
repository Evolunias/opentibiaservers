import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-custom-map-servers');
}

export default function Nilot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-custom-map-servers" />;
}
