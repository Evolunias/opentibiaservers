import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-real-map-server');
}

export default function Classicus12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-real-map-server" />;
}
