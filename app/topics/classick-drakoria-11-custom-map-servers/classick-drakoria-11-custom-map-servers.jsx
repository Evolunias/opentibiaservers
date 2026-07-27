import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-custom-map-servers');
}

export default function ClassickDrakoria11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-custom-map-servers" />;
}
