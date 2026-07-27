import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-real-map-server');
}

export default function Nilot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-real-map-server" />;
}
