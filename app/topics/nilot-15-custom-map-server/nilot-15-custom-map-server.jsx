import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-custom-map-server');
}

export default function Nilot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-custom-map-server" />;
}
