import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-real-map-server');
}

export default function ClassickDrakoria74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-real-map-server" />;
}
