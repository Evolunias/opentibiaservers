import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-4-custom-map-server');
}

export default function Nilot84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-4-custom-map-server" />;
}
