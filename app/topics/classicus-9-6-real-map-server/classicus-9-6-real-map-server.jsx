import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-real-map-server');
}

export default function Classicus96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-real-map-server" />;
}
