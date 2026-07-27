import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-custom-map-server');
}

export default function Nilot100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-custom-map-server" />;
}
