import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-custom-map-servers');
}

export default function ClassickDrakoria80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-custom-map-servers" />;
}
