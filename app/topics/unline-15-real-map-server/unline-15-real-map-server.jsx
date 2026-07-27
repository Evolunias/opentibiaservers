import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-real-map-server');
}

export default function Unline15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-real-map-server" />;
}
