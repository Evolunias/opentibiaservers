import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-real-map-server');
}

export default function ClassickDrakoria14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-real-map-server" />;
}
