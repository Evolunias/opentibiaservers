import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-9-6-custom-map-servers');
}

export default function Nilot96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-9-6-custom-map-servers" />;
}
