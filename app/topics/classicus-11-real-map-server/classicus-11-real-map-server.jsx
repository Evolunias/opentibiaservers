import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-real-map-server');
}

export default function Classicus11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-real-map-server" />;
}
