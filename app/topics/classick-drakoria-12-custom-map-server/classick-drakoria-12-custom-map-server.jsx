import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-custom-map-server');
}

export default function ClassickDrakoria12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-custom-map-server" />;
}
