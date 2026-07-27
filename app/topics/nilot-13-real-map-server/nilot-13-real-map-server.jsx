import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-real-map-server');
}

export default function Nilot13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-real-map-server" />;
}
