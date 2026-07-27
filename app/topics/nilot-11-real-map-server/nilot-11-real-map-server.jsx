import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-real-map-server');
}

export default function Nilot11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-real-map-server" />;
}
