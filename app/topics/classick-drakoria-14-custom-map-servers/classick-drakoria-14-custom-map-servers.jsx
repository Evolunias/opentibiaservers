import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-custom-map-servers');
}

export default function ClassickDrakoria14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-custom-map-servers" />;
}
