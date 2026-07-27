import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-real-map-server');
}

export default function Nilot15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-real-map-server" />;
}
