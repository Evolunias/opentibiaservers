import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-custom-map-servers');
}

export default function ClassickDrakoria12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-custom-map-servers" />;
}
