import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-custom-map-servers');
}

export default function ClassickDrakoria71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-custom-map-servers" />;
}
