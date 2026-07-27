import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-custom-map-servers');
}

export default function Nilot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-custom-map-servers" />;
}
