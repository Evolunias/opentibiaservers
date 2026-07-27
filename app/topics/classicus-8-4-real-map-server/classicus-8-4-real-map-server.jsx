import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-real-map-server');
}

export default function Classicus84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-real-map-server" />;
}
