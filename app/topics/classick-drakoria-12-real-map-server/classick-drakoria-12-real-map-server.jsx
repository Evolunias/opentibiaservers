import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-real-map-server');
}

export default function ClassickDrakoria12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-real-map-server" />;
}
