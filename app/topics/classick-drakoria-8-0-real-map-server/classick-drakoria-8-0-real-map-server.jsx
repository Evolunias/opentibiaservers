import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-real-map-server');
}

export default function ClassickDrakoria80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-real-map-server" />;
}
