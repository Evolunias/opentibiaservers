import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-real-map-server');
}

export default function Classicus14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-real-map-server" />;
}
