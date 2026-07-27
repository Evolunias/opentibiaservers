import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-98-custom-map-servers');
}

export default function ClassickDrakoria1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-98-custom-map-servers" />;
}
