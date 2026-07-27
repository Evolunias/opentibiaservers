import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-custom-map-servers');
}

export default function ClassickDrakoria96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-custom-map-servers" />;
}
