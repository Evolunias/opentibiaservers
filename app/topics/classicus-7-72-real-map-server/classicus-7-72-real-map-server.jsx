import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-real-map-server');
}

export default function Classicus772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-real-map-server" />;
}
