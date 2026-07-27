import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-4-real-map-server');
}

export default function ClassickDrakoria84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-4-real-map-server" />;
}
