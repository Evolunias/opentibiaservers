import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-real-map-server');
}

export default function ClassickDrakoria15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-real-map-server" />;
}
