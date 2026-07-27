import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-real-map-server');
}

export default function Nilot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-real-map-server" />;
}
