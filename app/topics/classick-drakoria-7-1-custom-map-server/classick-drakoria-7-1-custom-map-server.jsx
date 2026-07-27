import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-custom-map-server');
}

export default function ClassickDrakoria71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-custom-map-server" />;
}
