import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-real-map-server');
}

export default function ClassickDrakoria11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-real-map-server" />;
}
