import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-real-map-server');
}

export default function Classicus15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-real-map-server" />;
}
