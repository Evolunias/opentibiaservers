import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-custom-map-server');
}

export default function ClassickDrakoria100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-custom-map-server" />;
}
