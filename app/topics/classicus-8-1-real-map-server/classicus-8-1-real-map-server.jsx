import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-real-map-server');
}

export default function Classicus81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-real-map-server" />;
}
