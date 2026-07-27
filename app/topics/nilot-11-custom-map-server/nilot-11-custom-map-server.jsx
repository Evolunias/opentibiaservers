import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-custom-map-server');
}

export default function Nilot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-custom-map-server" />;
}
