import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-custom-map-server');
}

export default function ClassickDrakoria11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-custom-map-server" />;
}
