import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-custom-map-servers');
}

export default function Nilot71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-custom-map-servers" />;
}
