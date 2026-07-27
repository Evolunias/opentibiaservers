import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-real-map-server');
}

export default function Unline80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-real-map-server" />;
}
