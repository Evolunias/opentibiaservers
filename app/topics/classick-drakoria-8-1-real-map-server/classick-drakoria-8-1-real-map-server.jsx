import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-real-map-server');
}

export default function ClassickDrakoria81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-real-map-server" />;
}
