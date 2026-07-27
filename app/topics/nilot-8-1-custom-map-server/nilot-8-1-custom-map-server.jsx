import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-custom-map-server');
}

export default function Nilot81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-custom-map-server" />;
}
