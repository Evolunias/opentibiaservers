import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-real-map-server');
}

export default function ClassickDrakoria71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-real-map-server" />;
}
