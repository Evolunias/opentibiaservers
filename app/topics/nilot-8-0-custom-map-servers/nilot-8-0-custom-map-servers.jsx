import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-custom-map-servers');
}

export default function Nilot80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-custom-map-servers" />;
}
