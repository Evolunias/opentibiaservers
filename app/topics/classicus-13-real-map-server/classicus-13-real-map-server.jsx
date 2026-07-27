import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-real-map-server');
}

export default function Classicus13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-real-map-server" />;
}
