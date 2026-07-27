import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-real-map-server');
}

export default function Unline100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-real-map-server" />;
}
