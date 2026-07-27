import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-custom-map-server');
}

export default function Nilot71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-custom-map-server" />;
}
