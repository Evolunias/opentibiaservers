import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-custom-map-server');
}

export default function ClassickDrakoria96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-custom-map-server" />;
}
