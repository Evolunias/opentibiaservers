import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-custom-map-server');
}

export default function ClassickDrakoria14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-custom-map-server" />;
}
