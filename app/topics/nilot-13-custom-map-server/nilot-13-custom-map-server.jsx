import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-custom-map-server');
}

export default function Nilot13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-custom-map-server" />;
}
