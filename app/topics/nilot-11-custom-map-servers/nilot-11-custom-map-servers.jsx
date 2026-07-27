import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-custom-map-servers');
}

export default function Nilot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-custom-map-servers" />;
}
