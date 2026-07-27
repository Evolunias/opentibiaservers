import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-real-map-server');
}

export default function ClassickDrakoria76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-real-map-server" />;
}
